#include <cstdlib>
#include <iostream>
#include <cmath>
using namespace std;

void simple(int n)
{
	if(n == 2)
	{
		cout << "Простое";
		exit(0);
	}
	if(n % 2 == 0 || n < 2  )
	{
		cout << "Не простое";
		exit(0);
	}
	for(int i = 3; i < sqrt(n); i+=2)
	{
		if(n % i == 0)
		{
			cout << "Не простое";
			exit(0);
		}
	}
	cout << "Простое";
	return;
}

int main()
{
	setlocale(LC_ALL, "Russian");
	int n;
	cout << "Введите число: ";
	cin >> n;
	cout << endl;
	simple(n);
	return 0;
}

