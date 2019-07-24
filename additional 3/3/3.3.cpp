#include <iostream>
#include <cstdlib>
#include <cmath>
using namespace std;

void func(double a, double b, double c)
{
	if(a < 0 || b < 0 || c < 0)
	{
		cout << "Неверное значение !";
		return;
	}
	else if(a > b + c || b > a + c || c > a + b)
	{
		cout << "Числа не могут быть сторонами треугольника";
		return;
	}
	else
	{
		cout << "Числа могут быть сторонами треугольника";
		return;
	}
}

int main()
{
	setlocale(LC_ALL, "");
	double a, b, c;
	cout << "Введите сторону А: "; cin >> a;
	cout << "Введите сторону B: "; cin >> b;
	cout << "Введите сторону C: "; cin >> c;
	cout << endl;
	func(a, b, c);
	return 0;
}
