#include <cstdlib>
#include <iostream>
#include <cmath>
#include <vector>
using namespace std;

int main()
{
	setlocale(LC_ALL, "Russian");
	int n;
	int sum = 0;
	vector <int> a;
	cout << "Введите число: ";
	cin >> n;
	cout << endl;
	while (n >=1)
	{
		a.push_back(n%2);
		n /= 2;
	}

	for(int i =0; i < a.size(); i++)
	{
		sum += (a[i] * pow(2, a.size() - 1 -i));
	}
	cout <<"Бит-реверс числа равен: " << sum;
	return 0;
}

