#include <iostream>
#include <cstdlib>
#include <cmath>
using namespace std;

void equation(double a, double b, double c)
{
	if(a==0)
	{
		cout << "Неверное выражение !";
		return;
	}
	double D;
	D = pow(b,2) - 4 * a * c;
	if(D < 0)
	{
		cout << "Уравнение не имеет решений";
		return;
	}
	if(D == 0)
	{
		cout << "Уравнение имеет единственное решение х = " << -b / (2 * a);
		return;
	}
	else
	{
		cout << "x1 = " << (-b + sqrt(D)) / (2 * a) << endl;
		cout << "x2 = " << (-b - sqrt(D)) / (2 * a);
		return;
	}

}
int main()
{
	setlocale(LC_ALL, "rus");
	double a, b, c;
	cout << "ax^2+bx+c = 0" << endl << endl;
	cout << "Введите а: "; cin >> a;
	cout << "Введите b: "; cin >> b;
	cout << "Введите c: "; cin >> c;
	cout << endl;
	equation (a, b, c);
	return 0;
}
