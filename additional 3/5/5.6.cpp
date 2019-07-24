#include <cstdlib>
#include <iostream>
#include <cmath>
#include <vector>
using namespace std;

int main()
{
	setlocale(LC_ALL, "Russian");
	int n;
	vector <int> a;
	cout << "Введите число: ";
	cin >> n;
	cout << endl;

	for(int i = 2; i < n; i++)
	{
		a.push_back(i);
	}

	for(int i = 0; a[i] * a[i] < n; i++)
	{
		for(int j = i + 1; j < a.size(); j++)
		{
			if(a[j] % a[i] == 0)
			{
				a.erase(a.begin() + j);
			}
		}
	}

	for(int i = 0; i < a.size(); i++)
	{
		cout << a[i] << " ";
	}
}

