#include <iostream>
#include <cstdlib>
#include <cmath>
using namespace std;

int main()
{
	setlocale(LC_ALL, "");
	int n;
	double s;
	cout << "Введите номер члена гармонического ряда: ";
	cin >> n;
	cout << endl;
	if(n < 1)
    {
		cout << "Неверное значение !";
		exit(0);
	}
	for(int i = 1; i <= n; i++)
    {
		s = s + pow( i, (-1) );
	}
	cout << "Частичная сумма ряда равна: " << s;
	return 0;
}
