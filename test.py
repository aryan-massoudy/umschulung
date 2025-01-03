class Animal():
    def __init__(self,name,age):
        self.name = name
        self.age = age


class Dog(Animal):
    pass
"""     def __init__(self, name, age):
        super().__init__(name, age) """



mydog = Dog("Woofy",3)
print(mydog.name)