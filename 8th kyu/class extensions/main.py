from preloaded import Animal

class Cat(Animal):
    ... #your code here
    def __init__(self, name):
        super().__init__(name)
    
    def speak(self):
        return (f"{self.name} meows.")
 