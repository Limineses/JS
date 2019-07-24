#include <cstdlib>
#include <iostream>
#include <cmath>
#include <string>
#include <ctime>
using namespace std;

void random(int n)
{
	string a;
	for(int i = 0; i < n; i++)
	{
		int z = 0;
		int k = 0;
		while(k != 1)
		{
			z = rand() % 100 + 23;
			if(z >= 48 && z <= 57 || z >= 65 && z <= 90 || z >= 97 && z <= 122 )
			{
				k++;
			}
		}
		a[i] = (char)z;
	}
	for(int i = 0; i < n;i++)
	{
		cout << a[i];
	}
}

int main()
{
	setlocale(LC_ALL, "Russian");
	srand(time(NULL));
	int n;
	cout << "Введите число символов: ";
	cin >> n;
	cout << endl;
	random(n);
	return 0;
}

