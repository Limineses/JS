#include <cstdlib>
#include <iostream>
#include <cmath>
#include <vector>
using namespace std;

double func(vector <int> a,double x)
{
	double sum = 0;
	for(int i = 0; i < a.size(); i++)
	{
		sum += a[i] * pow(x, i);
	}
	return sum;
}

int main()
{
	setlocale(LC_ALL, "Russian");
	int n;
	double sum;
	vector <double> f;
	vector <double> extr;
	vector <double> varX;
	vector <double> sortVarX;
	cout << "Введите число коэффициентов: ";
	cin >> n;
	cout << "Введите коэффициенты: ";
	vector <int> a(n);
	for(int i = 0; i < n; i++)
	{
		cin >> a[i];
	}
	cout << endl;
	for(double x = -1000; x <= 1000; x += 0.1 )
	{
		f.push_back(func(a, x));
		varX.push_back(x);
	}
	for(int i = 2; i < f.size() - 1; i++)
	{
		if(f[i] < f[i+1] && f[i] < f[i-1])
		{
			extr.push_back(f[i]);
			sortVarX.push_back(varX[i]);

		}
		if(f[i] > f[i+1] && f[i] > f[i-1])
		{
			extr.push_back(f[i]);
			sortVarX.push_back(varX[i]);
		}
	}
	if(sortVarX.size() == 0)
	{
		cout << "Экстремумов нету";
	}
	cout << "Экстремумы: ";
	for(int i = 0; i < sortVarX.size(); i++)
	{
		double min = sortVarX[i] - 0.1;
		double max = sortVarX[i] + 0.1;
		double mid;
		while(max - min > 0.000001)
		{
			mid = min + ((max-min)/2);
			if(func(a, mid) > func(a, max))
			{
				max = mid;
			}
			else
			{
				min = mid;
			}
		}
		cout << func(a, mid) << " ";
	}
	return 0;
}


