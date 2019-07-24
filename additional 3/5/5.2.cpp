#include <cstdlib>
#include <iostream>
#include <cmath>
#include <vector>
using namespace std;

int main()
{
	setlocale(LC_ALL, "Russian");
	int n;
	int min = 0;
	int max = 0;
	cout << "Введите количество элементов в массиве: ";
	cin >> n;
	if (n < 1)
	{
		cout << endl;
		cout << "Неверное значение !";
		exit(0);
	}
	vector <int> a(n);
	cout << "Введите элементы массива через пробел: " ;
	for(int i =0; i < n; i++)
	{
		cin >> a[i];
	}

	for (int i =0; i < n; i++)
	{
		if (a[i] < a[min])
		{
			min = i;
		}
	}

	for (int i =0; i < n; i++)
	{
		if (a[i] > a[max])
		{
			max = i;
		}
	}
	cout << endl;
	cout << a[min] * a[max];
	return 0;
}

