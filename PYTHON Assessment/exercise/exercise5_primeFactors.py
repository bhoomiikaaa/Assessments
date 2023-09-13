def find_prime_factors(n):
    prime_factors = []
    divisor = 2

    while n > 1:
        while n % divisor == 0:
            prime_factors.append(divisor)
            n //= divisor
        divisor += 1

    return prime_factors


# Take input from the user
number = int(input("Enter a number: "))

# Get the prime factors
prime_factors = find_prime_factors(number)

print(f"Prime factors of {number}: {prime_factors}")
