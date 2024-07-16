import pandas as pd
import matplotlib.pyplot as plt

# Read the CSV file into a dataframe
df = pd.read_csv('holders.csv')

# Clean up the Balance column to convert it to numeric
df['Balance'] = df['Balance'].str.replace(',', '').astype(float)

# Calculate the cumulative balance
df['CumulativeBalance'] = df['Balance'].cumsum()

# append 0 to the beginning of the cumulative balance
df['CumulativeBalance'] = df['CumulativeBalance'].shift(1)

# What percentage of tokens (after the first 2 addresses) are held by the first 300 addresses?
total_tokens = df['CumulativeBalance'].iloc[-1]
top_300_tokens = df['CumulativeBalance'].iloc[300]
first_2_tokens = df['CumulativeBalance'].iloc[2]
percentage = (top_300_tokens-first_2_tokens) / (total_tokens-first_2_tokens) * 100
print(f'{percentage:.2f}% of tokens are held by the first 300 addresses.')

# Plotting the cumulative balance with enhancements
plt.figure(figsize=(12, 8))
plt.plot(df['CumulativeBalance'][2:500], marker='o', linestyle='-', color='b', markersize=5, linewidth=1)
plt.xlabel('Index')
plt.ylabel('Cumulative Balance')
plt.title('Cumulative Balance of Tokens')
# plt.yscale('log')  # Use a logarithmic scale if the data varies widely
plt.grid(True, which="both", linestyle='--', linewidth=0.5)
plt.tight_layout()  # Ensures that labels fit into the plot area
plt.show()
