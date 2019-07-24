#include <iostream>
#include <cstdlib>
#include <cmath>
using namespace std;

int fact(int x)
{
	if(x==0 || x==1)
    {
		return 1;
	}
	else
    {
		return(x * fact(x-1));
	}
}

int main()
{
	setlocale(LC_ALL, "");
	int x;
	cout << "Введите число: ";
	cin >> x;
	cout << endl;
	if(x < 0)
    {
		cout << "Неверное число !";
		exit(0);
	}
	cout << "Факториал "<< x << " равен: " << fact(x);
	return 0;
}
