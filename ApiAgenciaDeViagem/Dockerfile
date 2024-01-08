FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build-env
WORKDIR /src

# Restore as distinct layers
RUN dotnet restore *.csproj
# Build and publish a release
RUN dotnet publish -c Release *.csproj

# Build runtime image
FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /App

ENTRYPOINT ["dotnet", "AgenciaDeViagem.dll"]