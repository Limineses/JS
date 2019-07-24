#include <cstdlib>
#include <iostream>
#include <cmath>
#include <vector>
using namespace std;

int main()
{
	setlocale(LC_ALL, "Russian");
	int n, p;
	cout << "Введите количество элементов: ";
	cin >> n;
	vector <int> a(n);
	cout << "Введите элементы через пробел: ";
	for (int i = 0; i < n; i++)
	{
		cin >> a[i];
	}

	for(int j = n - 1 ; j >= 0; j--)
	{
		for(int i = 0; i < j; i++)
		{

			if(a[i] > a[i + 1])
			{
				p = a[i];
				a[i] = a[i + 1];
				a[i + 1] = p;
			}

		}

	}

	cout << endl;
	for(int i = 0; i < n; i++)
	{
		cout << a[i] << " ";
	}
	return 0;
}

