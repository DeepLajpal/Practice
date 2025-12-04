tips:

1.  it's generally recommended to avoid the inline jsx anonymous function and adwise to extract the inline functions
    Why This is Better:
    Performance: The handleKeyDown function is not recreated on every render.
    Readability: The JSX is cleaner, and the logic is separated.
    Reusability: The handleKeyDown function can be reused elsewhere if needed.
    Testing: It's easier to test the handleKeyDown function in isolation.
