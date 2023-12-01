package com.bigodebombado.backend.Controller;

import com.bigodebombado.backend.Exception.ResourceNotFoundException;
import com.bigodebombado.backend.Model.Job;
import com.bigodebombado.backend.Repository.JobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(value = "workprojobs")
public class JobController {

    @Autowired
    private JobRepository jobRepository;

    @GetMapping("/jobs")
    public List<Job> getAllJobs() {
        return jobRepository.findAll();
    }

    @GetMapping("/jobs/{id}")
    public ResponseEntity<Job> getUserById (@PathVariable(value = "id") Long jobId) throws ResourceNotFoundException {
        Job job = jobRepository.findById(jobId)
                .orElseThrow(() -> new ResourceNotFoundException("Job not found for this id :: " + jobId));
        return ResponseEntity.ok().body(job);
    }

    @PostMapping("/jobs")
    public Job createJob(@Valid @RequestBody Job job){
        return jobRepository.save(job);
    }

    @DeleteMapping("/jobs/{id}")
    public Map<String, Boolean> deleteJob(@PathVariable(value = "id") Long jobId) throws ResourceNotFoundException{
        Job job = jobRepository.findById(jobId)
                .orElseThrow(() -> new ResourceNotFoundException("Job not found for this id :: " + jobId));
        jobRepository.delete(job);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
}
