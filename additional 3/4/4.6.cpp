#include <cstdlib>
#include <iostream>
#include <cmath>
using namespace std;

int main()
{
	setlocale(LC_ALL, "Russian");
	int n;
	int s = 0;
	cout << "Введите число: ";
	cin >> n;
	cout << endl;
	if(n < 0)
    {
		n = n *(-1);
	}
	for(int i=1; i<=n; i++)
	{
		if(n % i==0)
		{
			s = s + i;
		}
	}
	cout << "Сумма всех натуральных делителей равна: " << s;
	return 0;
}

