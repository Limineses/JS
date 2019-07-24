#include <iostream>
#include <cstdlib>
#include <cmath>
using namespace std;

void func(int a, int b, int c, int d)
{
	if( a>b && a>c && a>d )
	{
		cout<<"Найбольшее число А";
		return;
	}
	if( b>a && b>c && b>d)
	{
		cout<<"Найбольшее число B";
		return;
	}
	if( c>a && c>b && c>d )
	{
		cout<<"Найбольшее число C";
		return;
	}
	if( d>a && d>b && d>c )
	{
		cout<<"Найбольшее число D";
		return;
	}
	if( a==b && b==c && c==d )
	{
		cout << "Все числа равны";
		return;
	}
	if( a==b && b==c && a>d )
	{
		cout << "Найбольшие числа А, В, С";
		return;
	}
	if( a==b && b==d && a>c )
	{
		cout << "Найбольшие числа А, В, D";
		return;
	}
	if( a==c && c==d && a>b )
	{
		cout << "Найбольшие числа А, C, D";
		return;
	}
	if( b==c && c==d && b>a )
	{
		cout << "Найбольшие числа B, C, D";
		return;
	}
	if( a==b && a>c && a>d)
	{
		cout<<"Найбольшие числа А и В";
		return;
	}
	if( a==c && a>b && a>d)
	{
		cout<<"Найбольшие числа А и С";
		return;
	}
	if( a==d && a>b && a>c)
	{
		cout<<"Найбольшие числа А и D";
		return;
	}
	if( b==c && b>a && a>d)
	{
		cout<<"Найбольшие числа B и С";
		return;
	}
	if( b==d && b>a && b>c)
	{
		cout<<"Найбольшие числа B и D";
		return;
	}
	if( c==d && c>a && c>b)
	{
		cout<<"Найбольшие числа C и D";
		return;
	}

}

int main()
{
	setlocale(LC_ALL, "");
	int a, b, c, d;
	cout << "Введите число А: "; cin >> a;
	cout << "Введите число B: "; cin >> b;
	cout << "Введите число C: "; cin >> c;
	cout << "Введите число D: "; cin >> d;
	cout << endl;
	func(a, b, c, d);
	return 0;
}
