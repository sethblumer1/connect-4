class Flashcard:
    term = ""
    definition = ""

    def __init__(self, term, definition):
        self.term = term
        self.definition = definition


class ConnectFourBoard:
    # Number is spaces is fixed
    # List of flashcards
    # User object
    # Player object

    rows, cols = (7, 6)
    board = [[0 for i in range(cols)] for j in range(rows)]
