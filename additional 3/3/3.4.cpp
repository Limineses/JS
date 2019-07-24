#include <iostream>
#include <cstdlib>
#include <cmath>
using namespace std;

int main()
{
	setlocale(LC_ALL, "");
	double a, b;
	int c;
	cout << "Введите первое число: "; cin >> a;
	cout << "Введите второе число: "; cin >> b;
	cout << endl;
	cout << "1.Сложение"<< endl;
	cout << "2.Вычитание"<< endl;
	cout << "3.Умножение"<< endl;
	cout << "4.Деление"<< endl;
	cout << endl;
	cout << "Операция: "; cin >> c;
	cout << endl;
	if(b==0 && c==4 )
	{
		cout << "Деление на 0 !";
		exit(0);
	}
	switch(c)
	{
		case 1:
			cout << a + b;
			break;
		case 2:
			cout << a - b;
			break;
		case 3:
			cout << a * b;
			break;
		case 4:
			cout << a / b;
			break;
		default :
		    cout << "Неверная операция";
			break;

	}
	return 0;
}
