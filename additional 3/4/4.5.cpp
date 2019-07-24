#include <cstdlib>
#include <iostream>
#include <cmath>
using namespace std;

int main()
{
	setlocale(LC_ALL, "Russian");
	int n;
	cout << "Введите число: ";
	cin >> n;
	cout << endl;
	if(n < 2)
    {
		cout << "Неверное число !";
		exit(0);
	}
	for(int i=2; i < n; i++)
	{
		if(n%i==0)
		{
			cout << "Число " << n << " не является простым";
			exit(0);
		}
	}
	cout << "Число " << n << " простое";
	return 0;
}

