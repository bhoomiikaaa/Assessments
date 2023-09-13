class vehicle:
    def __init__(self, make, model):
        self.make = make
        self.model = model

    def display_info(self):
        print(f"Make: {self.make}, Model: {self.model}")


class Car(vehicle):
    def __init__(self, make, model, num_doors):
        super().__init__(make, model)
        self.num_doors = num_doors

    def display_info(self):
        super().display_info()
        print(f"Number of Doors: {self.num_doors}")


class Motorcycle(vehicle):
    def __init__(self, make, model, has_sidecar):
        super().__init__(make, model)
        self.has_sidecar = has_sidecar

    def display_info(self):
        super().display_info()
        if self.has_sidecar:
            print("Has a Sidecar")
        else:
            print("Does not have a Sidecar")


# Creating instances of the classes
car = Car("Toyota", "Camry", 4)
motorcycle = Motorcycle("Harley-Davidson", "Sportster", False)

# Calling methods to display vehicle information
print("Car Information:")
car.display_info()

print("\nMotorcycle Information:")
motorcycle.display_info()
