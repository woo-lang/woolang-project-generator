import setuptools

# read the readme.md file and
# add it as the
# long description of our package


with open("README.md", "r", encoding="utf-8") as fh:
    long_description = fh.read()


DEPENDENCIES = []


setuptools.setup(
    name="woolang-project-generator",  # Replace with your own username
    version="1.0.0",
    author="P Pranav Baburaj",
    author_email="code-roller@googlegroups.com",
    description="A project generator for woolng",
    long_description=long_description,
    long_description_content_type="text/markdown",
    url="https://github.com/woo-lang/woolang-project-generator",
    packages=setuptools.find_packages(),
    install_requires=DEPENDENCIES,
    classifiers=[
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
    ],
    python_requires='>=3.6',
)