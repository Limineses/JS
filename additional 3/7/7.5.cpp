#include <cstdlib>
#include <iostream>
#include <cmath>
#include <string>
using namespace std;

int main()
{
	setlocale(LC_ALL, "Russian");
	string s, a;
	cout << "Введите строку на английском: ";
	getline(cin, s);
	cout << endl;
	a.push_back(s[0]);
	for(int i = 1; i < s.size(); i++)
	{
		if((int) s[i] == 32 )
		{
			a.push_back(s[i + 1]);
		}
	}
	for(int i = 0; i < a.size(); i++)
	{
		cout << a[i];
	}
	return 0;
}

