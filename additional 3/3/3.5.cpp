#include <cstdlib>
#include <iostream>
#include <cmath>
using namespace std;

void func (double x1, double x2, double y1, double y2, double r1, double r2, double d)
{

	double f1, f2, s1, s2, s;

	f1 = 2 * acos(( pow(r1, 2) - pow(r2 , 2) + pow(d, 2))/ (2 * r1 * d));
	f2 = 2 * acos(( pow(r2, 2) - pow(r1 , 2) + pow(d, 2))/ (2 * r2 * d));

	s1 = (pow(r1, 2) * (f1 - sin(f1)) ) / 2;
	s2 = (pow(r2, 2) * (f2 - sin(f2)) ) / 2;

	s = s1 + s2;

	cout << "Окружности пересекаются. Площадь пересечения равна: " <<  s;
	return;
}

int main()
{
	setlocale(LC_ALL, "Russian");

	double x1, x2, y1, y2, r1, r2, d;
	cout << "Введите х1: "; cin >> x1;
	cout << "Введите y1: "; cin >> y1;
	cout << "Введите r1: "; cin >> r1;
	cout << "Введите x2: "; cin >> x2;
	cout << "Введите y2: "; cin >> y2;
	cout << "Введите r2: "; cin >> r2;
	cout << endl;

	d = sqrt( pow (( x2 - x1), 2) + pow((y2 - y1), 2));

	if(d >= r1 + r1)
	{
		cout << "Окружности не пересекаются";
		exit(0);
	}

	else if(r1 > r2 && d <= r1 - r2)
	{
		cout << "Окружности пересекаются. Площадь пересечения равна1: " << 3.14 * pow(r2, 2);
		exit(0);
	}

	else if(r2 > r1 && d <= r2-r1)
	{
		cout << "Окружности пересекаются. Площадь пересечения равна: " << 3.14 * pow(r1, 2);
		exit(0);
	}

	else
	{
		func(x1, x2, y1, y2, r1, r2, d);
	}
	return 0;
}

