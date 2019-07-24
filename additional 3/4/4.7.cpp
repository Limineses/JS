#include <cstdlib>
#include <iostream>
#include <cmath>
using namespace std;

int func(int m)       // генерация простых чисел по возрастанию
{
	for(int i=2; i < m; i++)
    {
		if(m % i==0)
		{
			m++;
		}
	}
	return m;
}

bool func_2(int j)    // преврка результата разности на простоту
{
	for(int i=2; i < j; i++)
    {
		if(j%i==0)
		{
			return false;
		}
	}
	return true;
}


int main(){
	setlocale(LC_ALL, "Russian");
	int k;
	int m=2;
	int j;

	cout << "Введите число: "; cin >> k;
	cout << endl;

	if(k < 4)
    {
		cout << "Число невозможно разложить !";
		exit(0);
	}

	while( m < k)
	{

		j = k - func(m);       //отнимаем простое число и проверяем сам результат на простоту
		func_2(j);

		if(j==0 || j<0)
		{
			cout << "Число невозможно разложить !";
			exit(0);
		}

		else if(func_2(j) == true)
		{
			cout << func(m) << " " << j;
			exit(0);
		}

		else
		{
			m++;
		}
	}
	return 0;
}

