#include <cstdlib>                                      //вводить только руск/англ символы и цифры
#include <iostream>
#include <cmath>
#include <string>
using namespace std;

void check(int x, int y, string a, string b)
{
	for (int i = x; i < y; i++)
	{
		int countA = 0;
		int countB = 0;
		for(int j = 0; j < a.size(); j++ )
		{
			if((int)a[j] == i)
			{
				countA ++;
			}
		}
		for(int k = 0; k < b.size(); k++ )
		{
			if((int)b[k] == i)
			{
				countB ++;
			}
		}
		if(countA != countB)
		{
			cout << "No";
			exit(0);
		}
	}
}

int main()
{
	setlocale(LC_ALL, "Russian");
	string a, b;
	cout << "Введите две строки." << endl;
	cout << "1: ";
	getline(cin, a);
	cout << "2: ";
	getline(cin, b);
	cout << endl;
	for(int i = 0; i < a.size(); i++)
	{
		if((int)a[i] >64 && (int)a[i] < 91 || (int)a[i] >191 && (int)a[i] < 224)   //понижение регистра
		{
			a[i] = (int)a[i] + 32;
		}
	}
	for(int i = 0; i < b.size(); i++)
	{
		if((int)b[i] >64 && (int)b[i] < 91 || (int)b[i] >191 && (int)a[i] < 224)   //понижение регистра
		{
			b[i] = (int)b[i] + 32;
		}
	}
	check(97, 123, a, b);      //англ символы
	check(224, 256, a, b);     // рус символы
	check(48, 58, a, b);       // цифры
	cout << "Yes";
	return 0;
}

