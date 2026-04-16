from rest_framework import viewsets, filters
from rest_framework.decorators import action
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend

from .models import Category, Product
from .serializers import CategorySerializer, ProductSerializer


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    # filters
    filter_backends = [
        DjangoFilterBackend,
        filters.SearchFilter,
        filters.OrderingFilter
    ]

    #filter
    filterset_fields = ['category', 'is_active']

    # search
    search_fields = ['name']

    # sort
    ordering_fields = ['name', 'price']

    def get_queryset(self):
        queryset = Product.objects.all()

        # category filtr
        category = self.request.query_params.get('category')
        if category:
            queryset = queryset.filter(category_id=category)

        # active filtr
        is_active = self.request.query_params.get('is_active')
        if is_active is not None:
            if is_active.lower() == 'true':
                queryset = queryset.filter(is_active=True)
            elif is_active.lower() == 'false':
                queryset = queryset.filter(is_active=False)

        return queryset

    # custom endpoint
    @action(detail=False)
    def active(self, request):
        queryset = Product.objects.filter(is_active=True)

        # search
        search = request.query_params.get('search')
        if search:
            queryset = queryset.filter(name__icontains=search)

        # sorting
        ordering = request.query_params.get('ordering')
        if ordering:
            queryset = queryset.order_by(ordering)

        serializer = ProductSerializer(queryset, many=True)
        return Response(serializer.data)