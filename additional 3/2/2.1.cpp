#include <cstdlib>
#include <iostream>
#include <cmath>
using namespace std;

void equation(double a, double b)
{
	if(a==0 && b==0)
	{
		cout << "x - любое число";
		return;
	}
	if(a==0 && b!=0)
	{
		cout << "Неверное выражение !";
		return;
	}
	else
	{
		cout << "x равен: " << (-b / a);
		return;
	}

}

int main()
{
	setlocale(LC_ALL, "Russian");
	double a, b;
	cout << "0=ax+b" << endl;
	cout << "Введите a: "; cin >> a;
	cout << "Введите b: "; cin >> b;
	cout << endl;
	equation(a, b);
	return 0;
}

