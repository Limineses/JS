#include <cstdlib>
#include <iostream>
#include <cmath>
#include <string>
using namespace std;

int main()
{
	setlocale(LC_ALL, "Russian");
	string s;
	cout << "Введите комбинацию действий (А, В, С): ";
	getline (cin, s);
	cout << endl;
	int a = 1;
	int b = 0;
	int c = 0;
	int z = 0;
	for(int i = 0; i < s.size(); i++)
	{
		if((int)s[i] != 65 && (int)s[i] != 66 && (int)s[i] != 67)
		{
			cout << "Неверное значение !";
			exit(0);
		}
		else if((int)s[i] == (int)'A')
		{
			z = a;
			a = b;
			b = z;
		}
		else if((int)s[i] == (int)'B')
		{
			z = c;
			c = b;
			b = z;
		}
		else
		{
			z = c;
			c = a;
			a = z;
		}
	}
	cout << "Шарик находится ";
	if(a == 1)
	{
		cout << "слева";
	}
	else if(b == 1)
	{
		cout << "в центре";
	}
	else
	{
		cout << "справа";
	}
}

