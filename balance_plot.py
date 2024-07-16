import numpy as np
import matplotlib.pyplot as plt

# Define the range for i
i = np.arange(0, 10000)  # Let's consider i from 0 to 100

# Define the function
y = 4281 * (0.9995) ** i

# Plotting the function
plt.figure(figsize=(10, 6))
plt.plot(i, y, label=r'$4281 \cdot (0.9995)^i$')
plt.title('Plot of $4281 \cdot (0.9995)^i$')
plt.xlabel('i')
plt.ylabel('Value')
plt.legend()
plt.grid(True)
plt.show()