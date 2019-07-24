#include <cstdlib>
#include <iostream>
#include <cmath>
using namespace std;

void sum(int a, int b)
{
	cout << endl << "Ответ: " << a + b;
	return;
}

void sum(double x, double y)
{
	cout << endl << "Ответ: " << x + y;
	return;
}

void sum(int a, int b, int c)
{
	cout << endl << "Ответ: " << a + b + c;
	return;
}

void sum(double x, double y, double z)
{
	cout << endl << "Ответ: " << x + y +z;
	return;
}

void sum(int a, int b, int c, int d)
{
	cout << endl << "Ответ: " << a + b + c + d;
	return;
}

int main()
{
	setlocale(LC_ALL, "Russian");
	int n, a, b, c, d;
	double x, y, z;
	cout << "1.Сумма двух целых чисел" << endl;
	cout << "2.Сумма двух дробных чисел" << endl;
	cout << "3.Сумма трёх целых чисел" << endl;
	cout << "4.Сумма трёх дробных чисел" << endl;
	cout << "5.Сумма четырёх целых чисел" << endl;
	cout << "Действие: ";
	cin >> n;
	cout << endl;
	switch(n)
	{
		case 1:
			cout << "Введите числа через пробел: ";
			cin >> a >> b;
			sum(a, b);
			break;
		case 2:
			cout << "Введите числа через пробел: ";
			cin >> x >> y;
			sum(x, y);
			break;
		case 3:
			cout << "Введите числа через пробел: ";
			cin >> a >> b >> c;
			sum(a, b, c);
			break;
		case 4:
			cout << "Введите числа через пробел: ";
			cin >> x >> y >> z;
			sum(x, y, z);
			break;
		case 5:
			cout << "Введите числа через пробел: ";
			cin >> a >> b >> c >> d;
			sum(a, b, c, d);
			break;
		default:
			cout << "Неверное значение!";
	}
	return 0;
}

