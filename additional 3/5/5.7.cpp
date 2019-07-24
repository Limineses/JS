#include <cstdlib>
#include <iostream>
#include <cmath>
#include <vector>
using namespace std;

int main()
{
	setlocale(LC_ALL, "Russian");
	int n, x;
	int sum = 0;
	cout << "Введите N: ";
	cin >> n;
	cout << "Введите X: ";
	cin >> x;
	cout << "Введите коэффициенты: ";
	vector <int> a(n);
	for(int i = 0; i < n; i++)
	{
		cin >> a[i];
	}
	for(int i = 0; i < n; i++)
	{
		sum += a[i] * pow(x, i);
	}
	cout << endl << "Ответ: " << sum;
}

