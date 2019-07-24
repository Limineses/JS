#include <iostream>
#include <cstdlib>
#include <cmath>
using namespace std;

void func(int n)
{
	if(n==0)
    {
		return;
	}
	else
	{
		int g = n % 1000;
		func(n / 1000);
		cout << g << " ";
		return;
	}
}

int main()
{
	setlocale(LC_ALL, "");
	int n;
	cout << "Введите число: ";
	cin >> n;
	cout << endl;
	func(n);
	return 0;
}
