# -*- coding: utf-8 -*-
"""
Created on Sun Jan 26 18:55:44 2025

@author: gabri
"""

import pandas as pd
import matplotlib.pyplot as plt

## Part 1: read csv files and visualization

# Read the movies_metadata file
movies_metadata = pd.read_csv('movies_metadata.csv')
# Read the ratings file
ratings = pd.read_csv('ratings.csv')

# Print the first 5 rows of each dataset
print(movies_metadata.head())
print(ratings.head())

