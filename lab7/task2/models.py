class Product:
    def __init__(self, name, price, brand):
        self.name = name
        self.price = price
        self.brand = brand

    def get_info(self):
        return f"Name: {self.name}, Price: {self.price}, Brand: {self.brand}"

    def discount_price(self):
        return self.price * 0.9

    def category(self):
        return "General product"

    def __str__(self):
        return f"{self.name} by {self.brand} costs {self.price}"


class Phone(Product):
    def __init__(self, name, price, brand, memory):
        super().__init__(name, price, brand)
        self.memory = memory

    def category(self):
        return "Phone"

    def call(self):
        return f"{self.name} is calling"

    def __str__(self):
        return f"Phone: {self.name}, {self.memory}GB, {self.brand}, {self.price}"


class Laptop(Product):
    def __init__(self, name, price, brand, screen_size):
        super().__init__(name, price, brand)
        self.screen_size = screen_size

    def category(self):
        return "Laptop"

    def code(self):
        return f"{self.name} is used for coding"

    def __str__(self):
        return f"Laptop: {self.name}, {self.screen_size} inch, {self.brand}, {self.price}"