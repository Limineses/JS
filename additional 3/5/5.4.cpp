#include <cstdlib>
#include <iostream>
#include <cmath>
#include <vector>
using namespace std;

int main()
{
	setlocale(LC_ALL, "Russian");
	int n, i;
	int sum = 0;
	cout << "Введите число: ";
	cin >> n;
	cout << endl;
	vector <int> a;
	a.push_back(0);
	if(n == 0)
	{
		cout << "Число является палиндромом";
		exit(0);
	}
	while(n >= 1)
	{
		int z;
		z = n % 10;
		a.push_back(z);
		n = n / 10;
	}

	for(int i = 1; i < a.size(); i++)
	{
		if(a[i] == a[a.size() - i])
		{
			continue;
		}
		else
		{
			cout << "Число не является палиндромом";
			exit(0);
		}
	}
	cout << "Число является палиндромом";

	return 0;
}


