#include <cstdlib>
#include <iostream>
#include <cmath>
#include <ctime>
using namespace std;

int main()
{
	setlocale(LC_ALL, "Russian");
	srand(time(NULL));
	int n;
	int sum = 0;
	cout << "Введите размер матрицы: ";
	cin >> n;
	cout << endl;
	int array[n][n];
	for(int i = 0; i < n; i++)
	{
		for(int j = 0; j < n; j++)
		{
			array[i][j] = (rand() % 100) - 50;
			cout << array[i][j] << " ";

			if(array[i][j] > 0)
			{
				sum += array[i][j];
			}
		}
		cout << endl << endl;
	}
	cout << endl << "Сумма неотрицательных элементов: " << sum;
	return 0;
}

