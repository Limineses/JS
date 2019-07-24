#include <cstdlib>
#include <iostream>
#include <cmath>
#include <vector>
#include <ctime>
using namespace std;

int main()
{
	setlocale(LC_ALL, "Russian");
	srand(time(NULL));
	int a, b, z;
	int n = 0;
	int min = 0;
    cout << "Введите диапозон от 0 до " << RAND_MAX << "." << endl;
	cout << "Нижняя граница: "; cin >> a;
	cout << "Верхняя граница: "; cin >> b;
	cout << endl;

	if (a <0 || b < 1 || a >= b )
	{
		cout << endl;
		cout << "Неверное значение !";
		exit(0);
	}

	vector <int> y;

	while (n!=15)
	{
		z = rand();
		if (z >= a && z <= b )
		{
			y.push_back(z);
			n++;
		}
	}

	for(int j=0; j < 15 ; j++)
	{
		for(int i = j; i < 15; i++ )
		{
			if(y[i] < y[min])
			{
				min = i;
			}
		}
		int p;
		p = y[j];
		y[j]= y[min];
		y[min] = p;
		cout << y[j] << " ";
	}
}

