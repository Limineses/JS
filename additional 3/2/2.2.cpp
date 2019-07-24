#include <iostream>
#include <cmath>
#include <cstdlib>
using namespace std;

void percent(double a, double x)
{
	if(a <= 0 || x <= 0)
	{
		cout << "Числа должны быть больше нуля !";
		return;
	}
	else
	{
		cout << (a / x) * 100 << "%";
		return;
	}
}

int main()
{
	setlocale(LC_ALL, "rus");
	double a, x;
	cout << "Процент числа А от числа Х" << endl;
	cout << "Ведите А: "; cin >> a;
	cout << "Ведите X: "; cin >> x;
	cout << endl;
	percent(a, x);
	return 0;
}
