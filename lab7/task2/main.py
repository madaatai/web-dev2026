from models import Product, Phone, Laptop


def main():
    product1 = Product("Mouse", 5000, "Logitech")
    phone1 = Phone("iPhone 13", 350000, "Apple", 128)
    laptop1 = Laptop("ThinkPad", 420000, "Lenovo", 15.6)

    products = [product1, phone1, laptop1]

    for item in products:
        print(item)
        print(item.get_info())
        print("Discount price:", item.discount_price())
        print("Category:", item.category())
        print()


if __name__ == "__main__":
    main()