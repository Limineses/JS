#include <cstdlib>
#include <iostream>
#include <cmath>
#include <string>
using namespace std;

int main()
{
	setlocale(LC_ALL, "Russian");
	string s;
	int sum = 0;
	int min = 100;
	int max = 0;
	int i1 = 0;
	int i2 = 0;
	cout << "Введите строку на английском заканчивая пробелом: ";
	getline(cin, s);
	cout << endl;
	if((int)s[s.size() - 1] != 32)
	{
		cout << "Необходимо закончить строку пробелом !";
		exit(0);
	}
	for(int i = 0; i < s.size(); i++)
	{
		if((int)s[i] < 32 || (int)s[i] > 122)
		{
			cout << "Неверное значение !";
			exit(0);
		}
		if((int)s[i] != 32)
		{
			sum += 1;
		}
		else
		{
			if(sum > max )
			{
				max = sum;
				i1 = i;
			}
			if(sum < min)
			{
				min = sum;
				i2 = i;
			}
			sum = 0;
		}
	}
	cout << "Самое длинное слово: " << s.substr(i1-max, max)<< endl;
	cout << "Самое короткое слово: " <<s.substr(i2-min, min);
}

