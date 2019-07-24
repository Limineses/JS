#include <cstdlib>
#include <iostream>
#include <cmath>
#include <vector>
using namespace std;

int main()
{
	setlocale(LC_ALL, "Russian");
	int n;
	int sum = 0;
	vector <int> a(n);
	cout << "Введите количество элементов в массиве: "; cin >> n;

	if (n < 1)
	{
		cout << "Неверное значение !";
		exit(0);
	}
	cout << "Введите элементы через пробел: ";

	for (int i = 0; i < n; i++)
	{
		cin >> a[i];
	}

	for(int i = 0; i < n; i++)
	{
		if(a[i] % 2 == 0 && a[i] % 3 != 0)
		{
			sum += a[i];
		}

	}
	cout << endl;
	cout << "Ответ: " << sum;
	return 0;
}

