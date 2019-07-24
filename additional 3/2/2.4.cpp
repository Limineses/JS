#include <cstdlib>
#include <iostream>
#include <cmath>
using namespace std;

int main()
{
	setlocale(LC_ALL, "Russian");
	double odd = 1;
	double even = 1;
	double sum = 0;
	double s1, s2, x;
	cout << "Разложение arcsin(x) в ряд Тейлора до 4-го члена." << endl;
	cout << "Введите Х в пределах [-1; 1]: ";
	cin >>x;
	cout << endl;

	if (x > 1 || x < -1)
	{
		cout << "Неверное значение !";
		exit(1);
	}

	for(int j = 4; j >= 0; j--)
	{
		for(int i = 2 * j - 1; i > 0; i -=2) // двойной факториал по нечетному основанию
		{
			odd = odd * i;
		}

		for(int i = 2 * j; i>0; i -= 2)     // двойной факториал по четному основанию
		{
			even = even * i;
		}

		s1 = odd / even;
		s2 = (pow(x, j * 2 - 1)/ 2 * j - 1);
		sum += s1 * s2;
	}
	cout << "Ответ: " << sum;
	return 0;
}

