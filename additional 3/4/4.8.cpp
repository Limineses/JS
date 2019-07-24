#include <cstdlib>
#include <iostream>
#include <cmath>
using namespace std;

void func(int a, int b)
{
	int x, y, z;
	x = a;
	y = b;
	z = x % y;
	if(z == 0)
    {
		cout << "НОД равен: " << y;
	}
	else
    {
		a = y;
		b = z;
		func(a, b);
	}
}

int main()
{
	setlocale(LC_ALL, "Russian");
	int i, j;
	cout << "Введите первое число: "; cin >> i;
	cout << "Введите второе число: "; cin >> j;
	cout << endl;
	if(i == 0 || j == 0)
    {
		cout << "Неверное значение !";
		exit(0);
	}
	if(i == j)
	{
		cout << "НОД равен: " << i;
	}
	if(i < 0)
	{
		i = i *(-1);
	}
	if(j < 0)
	{
		j = j *(-1);
	}
	if(i > j)
	{
		func(i, j);
	}
	if(j > i)
	{
		func(j, i);
	}
	return 0;
}

