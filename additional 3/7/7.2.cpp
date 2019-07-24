#include <cstdlib>
#include <iostream>
#include <cmath>
#include <string>
using namespace std;

int main()
{
	setlocale(LC_ALL, "Russian");
	string s;
	cout << "Введите строку: ";
	getline(cin, s);
	cout << endl;
	for(int i = 0; i < s.size(); i++ )
	{
		if((int)s[i]== 40 && (int)s[i-1] != 32 || (int)s[i]== 41 && (int)s[i+1] != 32)
		{
			cout << "Неверно";
			exit(0);
		}

	}
	cout << "Верно";
	return 0;
}

