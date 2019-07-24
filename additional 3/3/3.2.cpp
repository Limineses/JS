#include <iostream>
#include <cstdlib>
#include <cmath>
using namespace std;

void days(int x)
{
	if(x>=86400)
	{
		cout << x/86400 <<"(d) : ";
		return ;
	}
	else
	{
		return;
	}

}

void hours(int x)
{
	if(x%86400<86400 && x%86400>=3600)
	{
		cout << x%86400/3600 <<"(h) : ";
		return ;
	}
	else
	{
		return;
	}

}

void minutes(int x)
{
	if((x%86400)%3600<3600 && (x%86400)%3600>=60)
	{
		cout << ((x%86400)%3600)/60 <<"(m) : ";
		return ;
	}
	else
	{
		return;
	}

}

void seconds(int x)
{
	if(((x%86400)%3600)%60<60 && ((x%86400)%3600)%60>=1)
	{
		cout << (((x%86400)%3600)%60)<<"(s)";
		return ;
	}
	else
	{
		return;
	}

}

int main()
{
	setlocale(LC_ALL, "");
	int x;
	cout << "Введите количество секунд: "; cin >> x;
	cout << endl;
	if(x <= 0)
	{
		cout << "Неверное значение !";
		exit(0);
	}
    days(x);
    hours(x);
    minutes(x);
    seconds(x);
    return 0;
}
