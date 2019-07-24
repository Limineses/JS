#include <cstdlib>
#include <iostream>
#include <cmath>
using namespace std;

int fact (int n)
{
	if(n == 0)
	{
		return 1;
	}
	else
	{
		return n * fact(n-1);
	}
}

int main(){
	setlocale(LC_ALL, "Russian");
	int n;
	cout << "Введите число: ";
	cin >> n;
	cout << endl;
	if(n < 0)
	{
		cout << "Неверное значение !";
		exit(1);
	}
	cout << "Факториал " << n << " равен: " << fact(n);
	return 0;
}

