#include <cstdlib>
#include <iostream>
#include <cmath>
#include <vector>
using namespace std;

void sum(int a, int b)
{
	if(a > b)
	{
		cout << "Max: " << a << "   ";
		cout << "Min: " << b;
	}
	else
	{
		cout << "Max: " << b << "   ";
		cout << "Min: " << a;
	}
}

void sum(int a, int b, int c)
{
	if(a > b && a > c)
	{
		cout << "Max: " << a << "   ";
	}
	else if(b > a && b > c)
	{
		cout << "Max: " << b << "   ";
	}
	else
	{
		cout << "Max: " << c << "   ";
	}

	if(a < b && a < c)
	{
		cout << "Min: " << a;
	}
	else if(b < a && b < c)
	{
		cout << "Min: " << b;
	}
	else
	{
		cout << "Min: " << c;
	}
}

int main(){
	setlocale(LC_ALL, "Russian");
	int n, a, b, c;
	cout << "Введите количество цифр (2 или 3): ";
	cin >> n;
	if(n < 2 || n > 3)
	{
		cout << endl << "Неверное значение!";
		exit(0);
	}
	if (n == 2)
	{
		cout << "Введите первое число: ";
		cin >> a;
		cout << "Введите второе число: ";
		cin >> b;
		cout << endl;
		sum(a, b);
	}
	if (n == 3)
	{
		cout << "Введите первое число: ";
		cin >> a;
		cout << "Введите второе число: ";
		cin >> b;
		cout << "Введите третее число: ";
		cin >> c;
		cout << endl;
		sum(a, b, c);
	}
	return 0;
}

