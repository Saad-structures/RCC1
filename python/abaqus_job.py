# abaqus_job.py

import os

def create_abaqus_job(job_name, model_file, output_directory):
    job_script = f"""
from abaqus import *
from abaqusConstants import *

# Create a new model
model = mdb.Model(name='{job_name}')

# Import the model from the specified file
mdb.openStep(fileName='{model_file}', scaleFromFile=OFF)

# Create a job
job = mdb.Job(name='{job_name}', model='{job_name}', description='Abaqus job for {job_name}')

# Set the output directory
job.setValues(outputDirectory='{output_directory}')

# Submit the job
job.submit()
job.waitForCompletion()
"""
    return job_script

if __name__ == "__main__":
    job_name = "MyAbaqusJob"
    model_file = "path/to/model_file.step"
    output_directory = os.path.join(os.getcwd(), "output")

    job_script = create_abaqus_job(job_name, model_file, output_directory)
    print(job_script)