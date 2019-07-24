#include <cstdlib>
#include <iostream>
#include <cmath>
using namespace std;

int fact (int n)
{
	int sum = 1;
	while(n != 0)
	{
		sum = sum * n;
		n--;
	}
	return sum;
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
		exit(0);
	}
	cout << "Факториал " << n << " равен: " << fact(n);
	return 0;
}

