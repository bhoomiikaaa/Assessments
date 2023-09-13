class Employee:
    def __init__(self, name, employee_id):
        self.name = name
        self.employee_id = employee_id

    def display_info(self):
        print(f"Name: {self.name}, Employee ID: {self.employee_id}")


class Manager(Employee):
    def __init__(self, name, employee_id, department):
        super().__init__(name, employee_id)
        self.department = department

    def display_info(self):
        super().display_info()
        print(f"Department: {self.department}, Role: Manager")


class Engineer(Employee):
    def __init__(self, name, employee_id, programming_language):
        super().__init__(name, employee_id)
        self.programming_language = programming_language

    def display_info(self):
        super().display_info()
        print(f"Programming Language: {self.programming_language}, Role: Engineer")


class Salesperson(Employee):
    def __init__(self, name, employee_id, sales_quota):
        super().__init__(name, employee_id)
        self.sales_quota = sales_quota

    def display_info(self):
        super().display_info()
        print(f"Sales Quota: {self.sales_quota}, Role: Salesperson")


# Creating instances of the classes
manager = Manager("Alice", "M001", "Marketing")
engineer = Engineer("Bob", "E001", "Python")
salesperson = Salesperson("Charlie", "S001", 100000)

# Displaying employee information
manager.display_info()
print()
engineer.display_info()
print()
salesperson.display_info()
