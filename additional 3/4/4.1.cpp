#include <iostream>
#include <cstdlib>
#include <cmath>
using namespace std;

int main()
{
	setlocale(LC_ALL, "");
	int x,z;
	long long a=0;
	long long b=1;
	cout << "Введите номер элемента: ";cin >> x;     //0[1], 1[2], 1[3], 2[4], 3[5], 5[6]
	cout << endl;

	if(x < 1)
	{
		cout << "Неверное значение !";
		exit(0);
	}
	else if(x % 2==0)
	{
		z = x / 2 - 1;
	}
	else
	{
		z = x / 2;
	}

	while(z > 0)
	{
		a=a+b;
		b=a+b;
		z--;
	}
	if(x % 2 == 0)
	{
		cout<< "Этот элемент равен: " << b;
	}
	else
	{
		cout << "Этот элемент равен: " << a;
	}
	return 0;
}

//либо через формулу x = ( ( pow( (( 1 + sqrt(5)) / 2 ),n ) - pow( (( 1 - sqrt(5)) / 2 ),n ) ) / sqrt(5) );
